import React from "react";
import "./DayThreeFoodWebsite.css"
import mainOne from "../../assests/foodWebsite/main_1.jpg"
import mainTwo from "../../assests/foodWebsite/main_2.jpg"
import Burger_1 from "../../assests/foodWebsite/breads_1.jpg"
import Burger_2 from "../../assests/foodWebsite/breads_2.jpg"
import Burger_3 from "../../assests/foodWebsite/breads_3.jpg"
import Burger_4 from "../../assests/foodWebsite/burger4.jpg"
import Fries_1 from "../../assests/foodWebsite/fried_1.jpg"
import Fries_2 from "../../assests/foodWebsite/fried_2.jpg"
import Fries_3 from "../../assests/foodWebsite/fried_3.jpg"
import Fries_4 from "../../assests/foodWebsite/fried_4.jpg"

const DayThreeFoodWebsite = ()=>{
    return(
        <div className="food-website-container">
            <div className="navbar">
                <a href="#">Home</a>
                <a href="#">Burgers</a>
                <a href="#">Fries</a>
                <a href="">Deserts</a>
                <a href="">Greens</a>
                <a href="">Others</a>
            </div>
            <div className="home">
                <h1>
                    <span id="yellow">YUMMY</span>
                    <span style={{marginLeft:"10px"}}>FOODS</span>
                </h1>
                <h2 className={"welcome-heading"}>Welcome to yummy foods</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolorum eum hic illo rerum soluta voluptatem? Blanditiis consequuntur dolores eaque in iste libero quibusdam sit totam, voluptatibus voluptatum! Ad animi asperiores culpa delectus dolor doloribus eos esse ex facere id inventore modi, molestias mollitia necessitatibus nemo nobis obcaecati omnis perferendis, praesentium quibusdam quidem recusandae tenetur voluptatum. Consectetur exercitationem modi nemo.</p>
                <div className="table-container">
                    <table>
                        <tr>
                            <td>
                                <img src={mainOne} height={"400px"} width={"400px"} alt="" />
                                <p> Awesome Ingredients</p>
                            </td>

                            <td>
                                <img src={mainTwo} height={"400px"} width={"400px"}  style={{marginLeft:"30px"}} alt=""/>
                                <p > Awesome Ingredients</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ea facilis pariatur temporibus? Accusamus architecto, aspernatur assumenda beatae, consequuntur fugiat impedit iste laborum nihil nostrum obcaecati odit quae sit suscipit voluptas? Dolorem ea eos non quisquam rerum sed similique voluptatum.</p>
            </div>
            {/*burger section*/}
            <div className="burger-collection padding">
                <h2 className={"welcome-heading"}>Burgers Collection Bonanza</h2>
                <p className={"my-3"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur excepturi, molestiae. Ab accusantium amet aut autem blanditiis dolores dolorum esse et fuga illum inventore ipsa, ipsam labore molestiae neque officia praesentium quod rem reprehenderit similique sunt vel voluptas. Aperiam, architecto consequatur delectus deserunt doloribus error et excepturi facilis illum inventore mollitia nam nihil numquam obcaecati officiis quam quia sunt ullam ut voluptate? Atque culpa dolore, dolores eius enim error esse ipsa ipsam itaque iure modi mollitia nesciunt nisi nostrum omnis porro praesentium qui quia quis quo rem repudiandae veniam voluptate? At autem maxime officia officiis omnis pariatur placeat suscipit temporibus.</p>
                <div className="table-container">
                    <table>
                        <tr>
                            <td>
                                <img src={Burger_1} height={"200px"} width={"300px"} alt="" />
                                <p>BURGER ONE</p>
                            </td>

                            <td>
                                <img src={Burger_2} height={"200px"} width={"300px"} alt=""/>
                                <p>BURGER TWO</p>
                            </td>
                            <td>
                                <img src={Burger_3} height={"200px"} width={"300px"} alt="" />
                                <p>BURGER THREE</p>
                            </td>
                            <td>
                                <img src={Burger_4} height={"200px"} width={"300px"}  alt=""/>
                                <p>BURGER FOUR</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, consectetur, debitis dolor dolore dolorem eius et ex fugit ipsa perspiciatis quod tempore. A at, dolore laboriosam ratione sunt tempora! Accusantium beatae cum eius explicabo illum natus, obcaecati quas quasi sapiente similique! Alias, cupiditate delectus, esse exercitationem fugiat laudantium nihil qui reprehenderit sint sunt suscipit totam voluptatibus. Beatae consequuntur molestias quae.</p>
            </div>
            {/*fries section*/}
            <div className="fries-collection padding">
                <h2 className={"welcome-heading"}>fries Collection Bonanza</h2>
                <p className={"my-3"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur excepturi, molestiae. Ab accusantium amet aut autem blanditiis dolores dolorum esse et fuga illum inventore ipsa, ipsam labore molestiae neque officia praesentium quod rem reprehenderit similique sunt vel voluptas. Aperiam, architecto consequatur delectus deserunt doloribus error et excepturi facilis illum inventore mollitia nam nihil numquam obcaecati officiis quam quia sunt ullam ut voluptate? Atque culpa dolore, dolores eius enim error esse ipsa ipsam itaque iure modi mollitia nesciunt nisi nostrum omnis porro praesentium qui quia quis quo rem repudiandae veniam voluptate? At autem maxime officia officiis omnis pariatur placeat suscipit temporibus.</p>
                <div className="table-container">
                    <table>
                        <tr>
                            <td>
                                <img src={Fries_1} height={"200px"} width={"300px"} alt="" />
                                <p>fries one</p>
                            </td>

                            <td>
                                <img src={Fries_2} height={"200px"} width={"300px"} alt=""/>
                                <p>fries two</p>
                            </td>
                            <td>
                                <img src={Fries_3} height={"200px"} width={"300px"} alt="" />
                                <p>fries three</p>
                            </td>
                            <td>
                                <img src={Fries_4} height={"200px"} width={"300px"}  alt=""/>
                                <p>fries four</p>
                            </td>
                        </tr>
                    </table>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, consectetur, debitis dolor dolore dolorem eius et ex fugit ipsa perspiciatis quod tempore. A at, dolore laboriosam ratione sunt tempora! Accusantium beatae cum eius explicabo illum natus, obcaecati quas quasi sapiente similique! Alias, cupiditate delectus, esse exercitationem fugiat laudantium nihil qui reprehenderit sint sunt suscipit totam voluptatibus. Beatae consequuntur molestias quae.</p>
            </div>

            {/*GREEN SECTION*/}
            {/*NOODLES*/}
        </div>

    )
}
export default DayThreeFoodWebsite