interface TemplateProps {
    children: React.ReactNode;
}

const Template = ({ children }: TemplateProps) => {
    return <div className="container">{children}</div>;
};

export default Template;
