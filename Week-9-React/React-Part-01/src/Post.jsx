const style = {
    width: 200,
    backgroundColor: "white",
    borderRadius: 10,
    boderColor: "gray",
    boderWidth: 1,
    padding: 23
};

export function PostComponent({ name, subtitle, time, image, description }) {
    return <div style={style}>
        <div style={{ display: "flex" }}>
            <img src={image}
                style={{
                    width: 35,
                    height: 35,
                    borderRadius: 20
                }} />
            <div style={{ fontSize: 10, marginLeft: 10 }}>
                <b>
                    {name}
                </b>
                <div>{subtitle} </div>
                {time != undefined && <div>{time}</div>}
            </div>
        </div>
        <div style={{ fontSixe: 12 }}>{description}</div>
    </div>
}