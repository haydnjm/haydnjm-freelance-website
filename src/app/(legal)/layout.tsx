const LegalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-container">
      <div className="max-w-5xl mx-auto">{children}</div>
    </div>
  );
};

export default LegalLayout;
