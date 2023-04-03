import { useState } from "react";

function Footer() {
  const [count, setCount] = useState(0);
  const footerContent = [
    {
      title: "Get to Know Us",
      others: [
        "Careers",
        "About Us",
        "UK Modern Slavery Statement",
        "Sustainability",
        "Amazon Science",
      ],
    },
    {
      title: "Make Money with Us",
      others: [
        "Careers",
        "About Us",
        "UK Modern Slavery Statement",
        "Sustainability",
        "Amazon Science",
        "UK Modern Slavery Statement",
        "Sustainability",
        "Amazon Science",
      ],
    },
    {
      title: "Amazon Payment Methods",
      others: [
        "Careers",
        "About Us",
        "UK Modern Slavery Statement",
        "Sustainability",
        "Amazon Science",
        "UK Modern Slavery Statement",
        "Sustainability",
        "Amazon Science",
      ],
    },
    {
      title: "Let Us Help You",
      others: [
        "Careers",
        "About Us",
        "UK Modern Slavery Statement",
        "Sustainability",
        "Amazon Science",
        "UK Modern Slavery Statement",
        "Sustainability",
        "Amazon Science",
      ],
    },
  ];
  const loadData = (objData: any) => {
    return objData.map((obj: any) => {
      return (
        <div className="footerBox">
          <p>{obj.title}</p>
          {obj.others.map((item: any) => {
            return <p>{item}</p>;
          })}
          <p></p>
        </div>
      );
    });
  };
  return (
    <footer className="column">
      <div className="upperFooter">{loadData(footerContent)}</div>
      <div className="lowerFooter">
        <img src="/src/assets/img/logo.png" id="footerLogo" />
        <div
          className="row"
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <p>Conditions of Use & Sale</p>
          <p>Privacy Notice</p>
          <p>Cookies Notice</p>
          <p>Interest-Based Ads Notice</p>
        </div>
        <p>© 2023-2023, Not amazon.</p>
      </div>
    </footer>
  );
}
export default Footer;
