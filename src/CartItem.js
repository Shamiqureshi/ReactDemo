import React from "react";

class CartItem extends React.Component{
    constructor(){
        super()
        this.state = {
            price:990,
            title:'Mobile Phone',
            qty:0,
        }
        //1)way: this.increaseQuantity =this.increaseQuantity.bind(this);
    }
    //1) 1st continue way* increaseQuantity (){
    //     console.log('This is company :',this.state);
    // }



    //increaseQuantity
    //1st form 
    increaseQuantity =()=>{
        
        // console.log('this',this.state);
        //1st form 
        // this.setState({
        //     qty:this.state.qty +1,
        // })


        // 2nd form
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
        });
    }


    //2nd form 
        



    
    //decreaseQuantity
    decreaseQuantity=()=>{
        // console.log('decrease this: ',this.state)
        const {qty:quantity} = this.state //destructing obj
        if (quantity>0){
            this.setState({
                qty:quantity- 1,
            })
            console.log(quantity);
        }
        else{
            alert('You don\'t have any item in cart! ');
        }
    }

    //deleteItem
    deleteItem=()=>{

        //1st method
        // this.setState({
        //     qty:0,
        // });

        //2nd method
        //setState form 2- if previous state required use this
        this.setState((prev)=>{
            return{
                qty:0
            }
        });

    }


    render(){
        const {price,title,qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt=""/>
                </div>


                <div className="right-block">
                    <div style={ {fontSize:25}} >{title}</div>
                    <div style={{color:'#777'}} >Rs {price}</div>
                    <div style={{color:'#777'}} >{qty}</div>
                    <div  className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                        alt="decrease" 
                        className="action-icons"
                        onClick={this.decreaseQuantity} 
                        src="https://cdn-icons-png.flaticon.com/512/43/43625.png" 
                        />
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        // onClick={this.increaseQuantity.bind(this)}
                        onClick={this.increaseQuantity}

                        src="https://cdn-icons-png.flaticon.com/512/1828/1828925.png" />
                        <img 
                        alt="delete"
                        onClick={this.deleteItem} 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
                    </div>
                    
                </div>
            </div>
        )

    };

};

const styles = {
    image:{
        height: 110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;