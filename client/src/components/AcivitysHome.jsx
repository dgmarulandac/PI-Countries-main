import React from "react";
import {useSelector} from 'react-redux';
import Activity from "./Activity";
import NavBar from "./navBar";
import style from './activityCard.module.css';


export default function ActivitiesList() {
  
  const myActivity = useSelector((state) => state.activities);

 

  return (
    <div>

      <div>
        <NavBar />
      </div>

      <div className={style.container}>{
      myActivity?.map((acc) => {
          return (
            <div>
              <Activity
                name={acc.name}
                
                Duration={acc.Duration}
                Seasons={acc.Seasons}
                Dificulty={acc.Dificulty}
                countryId={acc.countryId}
              />
            </div> 
          )
        })}
      </div>
      
    </div>
  );
}
