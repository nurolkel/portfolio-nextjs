import useForm from "../lib/useForm";
import useSubmit from "../lib/useSubmit";
import MessageComponent from "../components/message";
import Loading from "../components/loading";
import { ContactContainer } from "../styles/container.styles";
import ReachMe from "../components/reachme";
import Meta from "../components/meta";

const ContactPage = () => {
    
    const { values, updateValue } = useForm({
        name:'',
        email:'',
        telephone:''
    });
   const {
        error,
        message,
        loading,
        submitForm
    }  = useSubmit({values});


    if (message) {
        return <MessageComponent message={message} />
    }

    if (error) {
        return <MessageComponent message={error} />
    }

    if (loading) {
        return <Loading />
    }

    return (
        <>
        <Meta title="Kelvin's Portfolio | Contact" />
        <ContactContainer>
            <div>
                <h1 className="text-blue text-center padding-top-bottom">Contact Page</h1>
                <div className="padding-inline--small flow">
                    <p className="text-light-grey letter-spacing-2">Thank You for coming to my page. I hope you liked what you saw. Please enter your information so we can talk one on one for any opportunity you may have!</p>
                    <ReachMe />
                </div>
            </div>
            <form onSubmit={submitForm}>
                <label htmlFor="name" className="text-light-grey d-block">Name
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={values.name} 
                    onChange={updateValue} 
                    className="bg-black text-white"
                /></label>
                <label htmlFor="email" className="text-light-grey d-block">Email
                <input  
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={updateValue}
                    className="bg-black text-white"
                /></label>
                <label htmlFor="telephone" className="text-light-grey d-block">Telephone
                <input 
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={values.telephone}
                    onChange={updateValue}
                    className="bg-black text-white"
                /></label>
                <button role="submit">Submit</button>
            </form>
        </ContactContainer>
        </>
    )

}

export default ContactPage;