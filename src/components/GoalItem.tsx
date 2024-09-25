
interface GoalProps {
    title ?: string;
    description ?: string;
  };
function GoalItem (props: GoalProps) {

    return (
        <>
            <h2>{props.title}</h2>
            <text>
                {props.description}
            </text>
        </>
    )
    
};
export default GoalItem;