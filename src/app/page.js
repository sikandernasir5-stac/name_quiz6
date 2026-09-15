import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main style={{ color: 'black' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {booking.map((b) => (
          <div key={b.id}>
            <Image 
              src={b.imageUrl} 
              alt={b.title || "Booking image"} 
              width={500} 
              height={300} 
            />
          </div>
        ))}
      </div>
    </main>
  );
}
