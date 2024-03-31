export default function Contact() {
    return (
        <form className="flex flex-col w-1/2 mx-auto">
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-col">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        className="border-b border-black bg-transparent"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        className="border-b border-black bg-transparent"
                    />
                </div>
            </div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                className="border-b border-black bg-transparent"
            />
            <label htmlFor="Subject">Subject:</label>
            <input
                type="text"
                id="subject"
            />
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
            />
        </form>
    )
}