import { Quote } from "./Quote"
import { Auth } from "./Auth"

export const Contact = () => {
    return(
        <div>           
            <div className="grid grid-cols-1 lg:grid-cols-2">           
                <div>
                    <Auth/>
                </div>
                <div className="hidden lg:block">
                    <Quote/>
                </div>
            </div>
        </div>
    ) 
}