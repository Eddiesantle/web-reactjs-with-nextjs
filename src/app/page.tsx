import { EventModel } from "@/models";
import Image from "next/image";

async function getEvents(): Promise<EventModel[]> {
  const response = await fetch('http://localhost:8000/events', {
    cache: "no-store", // Sem cache nenhum
    // next: {
    //   revalidate: 10 // segundos
    // }
  })
  return response.json()
}
export default async function Home() {
  const events = await getEvents()
  return (

    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Show Disponiveis</h1>
      <div className="grid grid-cols-3 gap-8">
        {events.map((event, key) => (
          <div key={
            key
          } className="bg-white shadow-lg rounded-lg">
            <Image className="w-full h-48 object-cover" src={event.image_url} alt={event.name}
              width={300} height={300} />
            <div className="p-4">
              <h2 className="text-xl text-black font-bold">
                {event.name}
              </h2>
              <p className="text-gray-700 mt-2">
                {new Date(event.date).toLocaleString()}
              </p>
              <p className="text-gray-700 mt-2">
                Tem {event.available_spots} lugares disponiveis
              </p>
              <p className="text-gray-700 mt-2">
                R$ {event.price.toFixed(2).replace('.', ',')}
              </p>
              <p>
                <button>Reservar lugar</button>
              </p>
            </div>
          </div>
        ))}

      </div>
    </main>
  );
}