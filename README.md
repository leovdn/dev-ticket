# Entities Explore

- Event
- Ticket (emitted ticket by user)
- Spot (place/seat)

## Domain

- [x] Event

  - [x] Validate
  - [x] AddSpot (add spots into event)

- [x] Spot

  - [x] Validate
  - [x] Reserve (seat reservation - purchase process)
  - [x] Domain Service: GenerateSpots

- [x] Ticket

  - [x] Validate
  - [x] Calculate Price

- [x] External Access Definition (Repository)

## Infrastructure / Service - Parners API

- [ ] Partner 1
- [ ] Partner 2
- [ ] Factory

## Infrastructure / Repository - DataBase Access

- [x] Repository
  - [x] ListEvents
  - [x] FindEventByID
  - [x] CreateSpot
  - [x] CreateTicket
  - [x] ReserveSpot
  - [x] FindSpotsByEventID
  - [x] FindSpotsByName

## Usecases

- [ ] ListEvents
- [ ] GetEvent
- [ ] ListSpots
- [ ] BuyTickets

## Infrastructure / HTTP Handlers

- [ ] ListEvents
- [ ] GetEvent
- [ ] ListSpots
- [ ] BuyTickets

## Main

- [ ] Entrypoint
