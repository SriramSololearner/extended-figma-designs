const formatDate = (date: Date) => {
    const monthNames = [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const day = date.getDate();
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${month} ${day}, ${year} ${hours}: ${minutes}`;
};




interface Istate {
    data: {
        id: number,
        queryTitle: string,
        comments:
        {
            id: number,
            query: string,
        }[],
        date: string
    }[]
}

export const json: Istate['data'] = [
    {
        id: 1,
        queryTitle: "How do I change my account email?",
        comments: [],
        date: formatDate(new Date()), // Added date property
    },
    {
        id: 2,
        queryTitle: "How do I reset my password?",
        comments: [],
        date: formatDate(new Date()), // Added date property
    },
    {
        id: 3,
        queryTitle: "How do I update my account information?",
        comments: [
            {
                id: 1,
                query: "What should I do if I encounter an error while updating my account information?",
            }
        ],
        date: formatDate(new Date()), // Added date property
    },
    {
        id: 4,
        queryTitle: "How do I delete my account?",
        comments: [
            {
                id: 1,
                query: "Can I recover my account after deletion?",
            },
            {
                id: 2,
                query: "Will deleting my account also remove my personal data?",
            }
        ],
        date: formatDate(new Date()), // Added date property
    },
    {
        id: 5,
        queryTitle: "How can I upgrade my subscription plan?",
        comments: [],
        date: formatDate(new Date()), // Added date property
    },
    {
        id: 6,
        queryTitle: "How can I cancel my subscription?",
        comments: [
            {
                id: 1,
                query: "Will I receive a refund if I cancel my subscription early?",
            }
        ],
        date: formatDate(new Date()), // Added date property
    },
    {
        id: 7,
        queryTitle: "How do I manage my payment methods?",
        comments: [
            {
                id: 1,
                query: "Can I add multiple payment methods to my account?",
            }
        ],
        date: formatDate(new Date()), // Added date property
    },
    {
        id: 8,
        queryTitle: "How do I contact customer support?",
        comments: [
            {
                id: 1,
                query: "What are the available channels for contacting customer support?",
            }
        ],
        date: formatDate(new Date()), // Added date property
    },
    {
        id: 9,
        queryTitle: "How do I request a feature?",
        comments: [],
        date: formatDate(new Date()), // Added date property
    },
    {
        id: 10,
        queryTitle: "How do I access my invoices?",
        comments: [
            {
                id: 1,
                query: "How can I download a copy of my invoices?",
            }
        ],
        date: formatDate(new Date()), // Added date property
    },
];