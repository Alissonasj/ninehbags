interface TemplateProps {
    children: React.ReactNode;
}

const Template = ({ children }: TemplateProps) => {
    return <div className="mx-20 md:mx-5">{children}</div>;
};

export default Template;
