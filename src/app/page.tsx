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
    // cache: "no-store",
    next: {
      tags: ["events"],
    }
  });
  return (await response.json()).events;
}

//suspense (live)
//client component (live)
//infinite scroll
//paginação (live)
//route handlers (live)

//stale while revalidate
export default async function Home() {
  const events = await getEvents();

  return (
    <main className="mt-10 flex flex-col">
      <Title>Show disponíveis</Title>

      <div className="mt-8 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
        {events.map((event, key) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}