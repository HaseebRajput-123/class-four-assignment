import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
    <div className="flex justify-center gap-8 p-8">
      <Card Name="Haseeb Rajput" Age={23} RollNo={5786} Day={"Monday"} Timing={"2 to 5"}/>
      
      <Card Name="Ali" Age={27} RollNo={3626} Day={"Monday"} Timing={"2 to 5"}/>
      
      <Card Name="Fahad" Age={25} RollNo={4042} Day={"Monday"} Timing={"2 to 5"}/>
    </div>
    
    </>

  );
}