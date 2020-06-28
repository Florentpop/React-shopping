import React from 'react'
import Item from './Item'
import SH3 from '../pic/SH3.jpg'
import TS2 from '../pic/TS2.jpg'
import hand2 from '../pic/hand2.jpg'
import hand5 from '../pic/hand5.jpg'
import hand4 from '../pic/hand4.jpg'
import SH2 from '../pic/SH2.jpg'
import backpack1 from '../pic/backpack 1.jpg'
import backpack2 from '../pic/backpack 2.jpg'
import backpack3 from '../pic/backpack 3.jpg'
import TS3 from '../pic/TS3.jpg'
import Camera from '../pic/Camera.jpg'



const Main = () => {
    return (

        <div className="row">
            <div className="col-2">
                <Item item="T Shirt"
                    image={TS2} />
            </div>

            <div className="col-2">
                <Item item="Shoe"
                    image={SH2} />
            </div>

            <div className="col-2">
                <Item item="Shoe"
                    image={SH3} />
            </div>

            <div className="col-2">
                <Item item="Handbag"
                    image={hand2} />
            </div>

            <div className="col-2">
                <Item item="Handbag"
                    image={hand5} />
                    
            </div>

            <div className="col-2">
                <Item item="Handbag"
                    image={hand4} />
            </div>

            <div className="col-2">
                <Item item="School Bag"
                    image={backpack3} />
            </div>

            <div className="col-2">
                <Item item="CrossBag"
                    image={backpack2} />
            </div>

            <div className="col-2">
                <Item item="Backpack"
                    image={backpack1} />
            </div>

            <div className="col-2">
                <Item item="T Shirt"
                    image={TS3} />
            </div>

            <div className="col-2">
                <Item item="Camera"
                    image={Camera} />
            </div>


        </div>

    )

}

export default Main