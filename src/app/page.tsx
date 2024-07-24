import Image from "next/image";
import { EventModel } from "../models";
import Link from "next/link";
import { Title } from "@/components/Title";
import { EventCard } from "@/components/EventCard";
//cache fosse atualizado baseado em quando houvesse novas vendas de ingressos,
//ou os dados dos eventos foram alterados
async function getEvents(): Promise<EventModel[]> {
  const response = await fetch(`${process.env.GOLANG_API_URL}/events`, {
    headers: {
      "apikey": process.env.GOLANG_API_TOKEN as string
    },
    next: {
      tags: ["events"],
    }
  });
  console.log('response getEvents()-> ', response)

  if (!response.ok) {
    throw new Error(`Failed to fetch events: ${response.statusText}`);
  }

  const data = await response.json();
  console.log('response getEvents()-> data', data)
  return data.events;
}

//suspense (live)
//client component (live)
//infinite scroll
//paginação (live)
//route handlers (live)

//stale while revalidate
export default async function Home() {
  const events = await getEvents();
  console.log('Home getEvents() -> events', events)

  return (
    <main className="mt-10 flex flex-col">
      <Title>Show disponíveis</Title>

      <div className="mt-8 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p>Nenhum evento disponível no momento.</p>
        )}
      </div>
    </main>
  );
}