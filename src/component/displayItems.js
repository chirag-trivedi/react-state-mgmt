//component to display the data retireived from Redux store , into the view
import React from 'react';

const DisplayItems = (props) => {  //functional component 

    const List =({datalist}) => {  //data to be displayed in the view is passed to this component 
        if(datalist){
            return datalist.map((data) => { //map function print the data after iterating over the datalist array
                return(
                    <div key={data.id}>
                        <h3>{data.name}</h3>
                        <img src={data.img} width="200" height="200" alt="image"/>
                    </div>
                )
            })
        }
    }

        return(//calls the List() function defined above
            <div> 
                {List(props)}
            </div>
        )
}


export default DisplayItems;