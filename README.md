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

- [ ] Repository
  - [ ] ListEvents
  - [ ] FindEventByID
  - [ ] CreateSpot
  - [ ] CreateTicket
