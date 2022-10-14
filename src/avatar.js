import './App.css';
import { Avatar, Tooltip } from '@mantine/core';

function AvatarCustom(props) {
    //  replace Satya with Satya Nadella
    //  replace Sam BF with Sam Bankman-Fried
    //  replace Parag with Parag Agrawal
    //  replace BL Lee with Bill Gurley
    //  replace Mathias D\u00f6pfner with Mathias Dopfner
    const { participants } = props;
    // participants is an array of strings
    let displayed_participants = participants.map((participant) => {
        if (participant === "Satya") {
            return "Satya Nadella";
        } else if (participant === "Sam BF") {
            return "Sam Bankman-Fried";
        } else if (participant === "Parag") {
            return "Parag Agrawal";
        } else if (participant === "BL Lee") {
            return "Bill Gurley";
        } else if (participant === "Mathias D\u00f6pfner") {
            return "Mathias Dopfner";
        } else {
            return participant;
        }
    });
    const truncatedParticipants = [];
    let additional = 0;
    if (participants.length > 2) {
        truncatedParticipants.push(displayed_participants[0]);
        additional = participants.length - 1;
    } else if (participants.length === 2) {
        truncatedParticipants.push(displayed_participants[0]);
        truncatedParticipants.push(displayed_participants[1]);
    } else {
        truncatedParticipants.push(displayed_participants[0]);
    }

    return (
        <Tooltip.Group openDelay={300} closeDelay={100}>
            <Avatar.Group spacing="sm">
                {truncatedParticipants.map((participant) => (
                    <Tooltip events= {{touch: true, focus: true}} key={participant} label={participant}>

                        <Avatar
                            radius={'xl'}
                            style={{ width: '50px', height: '50px', border: 'none'}}
                            key={participant}
                            src={`./pfps/${participant} twitter profile picture/Image_1.jpg`}
                            alt={participant}
                        />
                    </Tooltip>
                ))}
                {additional > 0 && (
                    <Tooltip events= {{touch: true, focus: true}} label={(participants).slice(1).join(', ')}>
                        <Avatar
                            radius={'xl'}
                            style={{ width: '50px', height: '50px', border: 'none'}}
                            key={additional}
                        >
                            +{additional}
                        </Avatar>
                    </Tooltip>
                )
                }

            </Avatar.Group>
        </Tooltip.Group>
    );
}
export default AvatarCustom;