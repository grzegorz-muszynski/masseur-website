// import "../pages/Opinions.css";

export default function Testimonial(props) {

    return (
        <div className="Testimonial">
            <p className="Testimonial__desc">„{props.text}" <span> - {props.name}</span></p>
            <p className="Testimonial__date">{props.date}</p>
            <div>* * * * *</div>
        </div>
    )
}