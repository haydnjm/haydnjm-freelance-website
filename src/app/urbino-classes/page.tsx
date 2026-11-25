import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urbino Classes",
};

const UrbinoClassesPage = () => {
  return (
    <section className="p-container py-12 md:py-24 lg:py-32">
      <div>
        <div
          data-urbino-studio="dev-studio-4"
          data-urbino-embed="classes-sections"
          data-urbino-locale="en"
        ></div>
        <script src="https://dev.urbino.studio/embed.js" async></script>
      </div>

      <hr className="my-5" />

      <div
        data-urbino-studio="dev-studio-4"
        data-urbino-embed="gift-cards"
        data-urbino-locale="en"
      ></div>
      <script src="https://dev.urbino.studio/embed.js" async></script>

      <hr className="my-5" />

      <div
        data-urbino-studio="dev-studio-4"
        data-urbino-embed="passes"
        data-urbino-locale="en"
      ></div>
      <script src="http://localhost:3000/embed.js" async></script>

      <hr className="my-5" />

      <div
        data-urbino-studio="dev-studio-4"
        data-urbino-embed="products"
        data-urbino-locale="en"
      ></div>
      <script src="https://dev.urbino.studio/embed.js" async></script>
    </section>
  );
};

export default UrbinoClassesPage;
