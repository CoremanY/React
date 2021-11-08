import React from "react";

export const UserInfo = (props) => <b>User Info:
    <p>Имя:{props.userName}</p>
    <p>Пол:{props.userGender}</p>
    <p>Возраст:{props.userAge}</p>
    <p>Работает лет:{props.yearsWorked}</p>
    <hr></hr>
    <p>Зарплата:{props.yearsWorked*10}</p>
    <hr></hr>
</b>;
