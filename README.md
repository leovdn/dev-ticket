# Entities Explore

- Event
- Ticket (emitted ticket by user)
- Spot (place/seat)

## Domain

- [x] Event

  - [ ] Validate
  - [ ] AddSpot (add spots into event)

- [ ] Spot

  - [ ] Validate
  - [ ] Reserve (seat reservation - purchase process)
  - [ ] Domain Service: GenerateSpots

- [ ] Ticket

  - [ ] Validate
  - [ ] Calculate Price

- [ ] External Access Definition (Repository)

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
