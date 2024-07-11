import Title from '@/components/common/Title';
import Content from '@/components/common/Content';

const Goal = ({icon, title, desc}) => {
    return (
        <div className="flex flex-col flex-1">
                <div className="flex items-center mb-4">
                    {icon}
                    <Title className="ml-2.5 text-primary">{title}</Title>
                </div>
                <div className="ml-4 border-l-4 border-secondary py-2 px-4 md:px-10">
                    <Content className="text-justify">{desc}</Content>
                </div>
            </div>
    );
};

export default Goal;