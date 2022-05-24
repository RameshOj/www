import { React, Component } from "react";
import "./Menu.css";
import two from "./two.jpg"
class Menu extends Component {
    render() {
        return (<>
         <section id="charges">
            <div class="menuContainer">
                <div class="menuText">
                    <h1 class="serviceHead">Charges</h1>
                    <h2 class="subhead">Weekly</h2>
                    <h4>0-10 Years - ₹250</h4>
                    <h4>10-20 Years - ₹350</h4>
                    <h4>20+ Years - ₹650</h4><br /><br />
                    <h2 class="subhead">Monthly</h2>
                    <h4>0-10 Years - ₹650</h4>
                    <h4>10-20 Years - ₹950</h4>
                    <h4>20+ Years - ₹1500</h4><br /><br />
                </div>
                <div class="menuImage">
                    <img class="two" src={two} alt="laundryService"></img>
                </div>
            </div>
            </section>
        </>);
    }
}
export default Menu;