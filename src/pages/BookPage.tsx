import Divider from "../components/constants/ui/Divider";
import Heading from "../components/constants/ui/Heading";
import Masonry from "../components/Masonry";

const BookPage = () => {
    const items = [
        {
          id: "1",
          img: "/ale.jpg",
          url: "/ale.jpg",
          height: 600,
        },
        {
          id: "2",
          img: "/ale1.jpg",
          url: "https://example.com/two",
          height: 500,
        },
        {
          id: "3",
          img: "/ale2.jpg",
          url: "https://example.com/three",
          height: 600,
        },
        {
          id: "4",
          img: "/ale3.jpg",
          url: "https://example.com/one",
          height: 1100,
        },
        {
            id: "5",
            img: "/ale4.jpg",
            url: "https://example.com/one",
            height: 500,
          },
          {
            id: "6",
            img: "/ale5.jpg",
            url: "https://example.com/three",
            height: 600,
          },
          {
            id: "7",
            img: "/ale6.jpg",
            url: "https://example.com/three",
            height: 1100,
          },
          {
            id: "8",
            img: "/ale7.jpg",
            url: "https://example.com/three",
            height: 1100,
          },
    ];

    return (
      <div className="min-h-fit bg-black p-4 md:p-20 pt-25 md:pt-30">
        <Heading title="Book" />
        <Divider className="mb-4" />
        <Masonry
            items={items}
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