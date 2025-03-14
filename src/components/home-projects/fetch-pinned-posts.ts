// types.ts
export interface PinnedRepo {
  name: string;
  description: string;
  url: string;
  owner: string;
}

/**
 * Fetches pinned repositories for a GitHub user
 * @param username GitHub username
 * @returns Array of pinned repositories with name, description, and URL
 */
export async function fetchPinnedRepos(
  username: string
): Promise<PinnedRepo[]> {
  try {
    // GitHub GraphQL API endpoint
    const endpoint = "https://api.github.com/graphql";

    // GraphQL query to fetch pinned repositories
    const query = `
        query {
          user(login: "${username}") {
            pinnedItems(first: 20, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name
                  description
                  url
                  
                }
              }
            }
          }
        }
      `;

    // Make the request to GitHub API
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      // Setting cache to no-store ensures we fetch fresh data each time
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data = await response.json();

    console.log(data);

    // Handle potential errors from the GraphQL response
    if (data.errors) {
      throw new Error(`GitHub GraphQL error: ${data.errors[0].message}`);
    }

    // Extract pinned repositories from the response
    const pinnedRepos = data.data.user.pinnedItems.nodes.map(
      (repo: {
        name: string;
        description: string;
        url: string;
        owner: { login: string };
      }) => ({
        name: repo.name,
        description: repo.description,
        url: repo.url,
      })
    );

    return pinnedRepos;
  } catch (error) {
    console.error("Error fetching pinned repositories:", error);
    throw error;
  }
}
