interface SectionListProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}
const SectionList = (props: SectionListProps) => {
  const { title, children, className } = props;
  return (
    <div className={`[&>*]:block ${className}`}>
      <p className="my-4 text-2xl font-bold sm:text-xl md:text-xl lg:text-3xl">
        {title}
      </p>
      {children}
    </div>
  );
};

export default SectionList;
