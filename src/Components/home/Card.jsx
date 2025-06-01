

// Props:
//     Icon: React component for the feature icon
//     title: string, title of the feature
//     description: string, brief description of the feature

const Card = ({ Icon, title, description  }) => {
    return (
        <div className="bg-blue-200 shadow-md rounded-xl p-6 w-4/5 max-w-sm border flex-center flex-col text-center gap-4 h-65">
            <div className="bg-gray-900/10 backdrop-blur-md rounded-full border border-white/5 shadow-sm p-4">
                <Icon className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600">{description}</p>
            
        </div>
    );
};

export default Card;
