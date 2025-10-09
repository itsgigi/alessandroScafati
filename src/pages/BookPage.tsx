import Divider from "../components/constants/ui/Divider";
import Heading from "../components/constants/ui/Heading";
import Masonry from "../components/Masonry";
import { useState, useEffect } from "react";
import GlobalApi from "../utils/GlobalApit";
import { type Media } from "../utils/types";

const BookPage = () => {
    const [items, setItems] = useState<Media[]>([]);

    useEffect(() => {
        GlobalApi.getMedia().then((data) => {
            console.log(data);
            setItems(data.books[0].images);
        });
    }, []);

    function formatHeight(height: number) {
        if (height > 1300) {
            return height / 5;
        }
        return height / 1.5;
    }

    return (
      <div className="min-h-screen bg-black p-4 md:p-20 pt-25 md:pt-30">
        <Heading title="Book" />
        <Divider className="mb-4" />
        <Masonry
          items={items.map((item) => ({
            id: item.id,
            url: item.url,
            img: item.url,
            height: formatHeight(item.height),
          }))}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    );
};
  
export default BookPage;