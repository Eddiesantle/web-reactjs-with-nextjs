import { cookies } from "next/headers";
import { Title } from "../../../../components/Title";
import { EventModel } from "../../../../models";
// queries
// export async function getEvent(eventId: string): Promise<EventModel | null> {
//   try {
//     const response = await fetch(`${process.env.GOLANG_API_URL}/events/${eventId}`, {
//       headers: {
//         "apikey": process.env.GOLANG_API_TOKEN as string
//       },
//       cache: "no-store",
//       next: {
//         tags: [`events/${eventId}`],
//       }
//     });

//     if (!response.ok) {
//       console.error('Failed to fetch event:', response.statusText);
//       return null;
//     }

//     const data = await response.json();
//     return data.event || null;
//   } catch (error) {
//     console.error('Error fetching event:', error);
//     return null;
//   }
// }

export default async function CheckoutSuccessPage({
  params,
}: {
  params: { eventId: string };
}) {
  // const event = await getEvent(params.eventId);

  console.log('CheckoutSuccessPage -> params.params', params.eventId)
  const event = null

  const cookiesStore = cookies();
  const selectedSpots = JSON.parse(cookiesStore.get("spots")?.value || "[]");

  if (!event) {
    return (
      <main className="mt-10 flex flex-col items-center">
        <Title>Erro ao carregar evento</Title>
        <p>Não foi possível carregar os detalhes do evento. Por favor, tente novamente mais tarde.</p>
      </main>
    );
  }


  return (
    <main className="mt-10 flex flex-col flex-wrap items-center ">
      <Title>Compra realizada com sucesso!</Title>
      <div className="mb-4 flex max-h-[250px] w-full max-w-[478px] flex-col gap-y-6 rounded-2xl bg-secondary p-4">
        <Title>Resumo da compra</Title>
        <p className="font-semibold">
          {/* Evento {event.name}
          <br />
          Local {event.location}
          <br />
          Data{" "}
          {new Date(event.date).toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })} */}
        </p>
        <p className="font-semibold text-white">Lugares escolhidos: {selectedSpots.join(", ")}</p>

      </div>
    </main>
  );
}
