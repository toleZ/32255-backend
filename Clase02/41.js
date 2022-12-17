/* HANDS ON LAB */

class TicketManager {
  #precioBaseDeGanancia = 0.2;
  #events = [];

  addEvent(
    name,
    place,
    price,
    capacity = 50,
    date = new Date().toLocaleDateString()
  ) {
    const id = this.#events.length;

    const event = {
      id,
      name,
      place,
      price: price + price * this.#precioBaseDeGanancia,
      capacity,
      date,
      participantes: [],
    };
    this.#events.push(event);

    return `Evento creado con id: ${id}`;
  }

  viewEvents() {
    return this.#events;
  }

  addUser(eventId, userId) {
    const event = this.#events.find((event) => event.id === eventId);

    if (!event) return `No hay eventos con el id: ${eventId}`;

    event.participantes.push(userId);
    return event.participantes;
  }
}

const eventsManager = new TicketManager();

const eventName = "Lola Palloza";
const eventPlace = "Bs As, Arg";
const eventPrice = 200;
eventsManager.addEvent(eventName, eventPlace, eventPrice);
eventsManager.addEvent(eventName, eventPlace, eventPrice);
eventsManager.addEvent(eventName, eventPlace, eventPrice);
console.log(eventsManager.addUser(1, 1));
