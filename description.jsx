const { useState, useEffect } = React;

const Description = () => {
    const [item, setItem] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null); 

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedItemName = urlParams.get("name");

        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                const foundItem = data.find(product => product.name === selectedItemName);
                setItem(foundItem);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    if (!item) return <p>Loading...</p>;


    const handleToggle = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <div className="item-details">
            <div>
                <img src={item.image} alt={item.name} className="item-details-image" />
            </div>
            
            <div>
                <h2>{item.name}</h2>
                <h3>{item.price}</h3>
                <button>Add to Cart</button>
                <p>{item.description}</p>

                <hr />

                
                <div className="small_dropdown" onClick={() => handleToggle(1)}>
                    <img className="first_icon" src="/images/metal.png" />
                    <p>Materials</p>
                    <img className={`arrow_icon ${openDropdown === 1 ? "rotated" : ""}`} src="/images/down.png" />
                </div>
                <p className={`hidden_text ${openDropdown === 1 ? "" : "hidden"}`}>
                    Describe the item or answer the question so that site visitors who are interested get more information. You can emphasize this text with bullets, italics or bold, and add links.
                </p>

                <hr />

                
                <div className="small_dropdown" onClick={() => handleToggle(2)}>
                    <img className="first_icon" src="/images/dimension.png" />
                    <p>Dimensions</p>
                    <img className={`arrow_icon ${openDropdown === 2 ? "rotated" : ""}`} src="/images/down.png" />
                </div>
                <p className={`hidden_text ${openDropdown === 2 ? "" : "hidden"}`}>
                Describe the item or answer the question so that site visitors who are interested get more information. You can emphasize this text with bullets, italics or bold, and add links.
                </p>

                <hr />

                
                <div className="small_dropdown" onClick={() => handleToggle(3)}>
                    <img className="first_icon" src="/images/info.png" />
                    <p>Care Information</p>
                    <img className={`arrow_icon ${openDropdown === 3 ? "rotated" : ""}`} src="/images/down.png" />
                </div>
                <p className={`hidden_text ${openDropdown === 3 ? "" : "hidden"}`}>
                    Describe the item or answer the question so that site visitors who are interested get more information. You can emphasize this text with bullets, italics or bold, and add links.
                </p>

                <hr />
            </div>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("react-root")).render(<Description />);