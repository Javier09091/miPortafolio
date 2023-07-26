import data from "./userdata.json"
import UserInformation from "./components/userinformation"

export default function Landscape(){

    console.log(data.user)

    return (
        <div>
           <UserInformation name={data.user.name} aboutMe={data.user.aboutMe} socialNetwork={data.user.socialNetwork} />
        </div>
    )
}