import FooterItems from "./FooterItems";
import {items} from "../../data/items";
function FooterLayout (){
    return(
        <section className="flex justify-center items-center gap-50">
            {items.map((items) => (
            <FooterItems
            key={items.id}
            items={items}
                />
         ))}
        </section>
    )
}
export default FooterLayout;