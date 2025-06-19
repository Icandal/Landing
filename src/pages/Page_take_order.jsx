import { forwardRef } from "react"
import { Button } from "../components/Button";

export const Page_take_order = forwardRef((props, ref) => {

    return(
        <section ref={ref} className="Page">
            <Button>Записаться</Button>
        </section>
    )
});