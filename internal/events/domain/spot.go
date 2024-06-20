package domain

import (
	"errors"

	"github.com/google/uuid"
)

var (
	ErrSpotAlreadyReserved = errors.New("Spot already reserved")
	ErrSpotNotFound = errors.New("Spot not found")
	ErrSpotNameRequired = errors.New("Spot name is required")
	ErrSpotNameTwoCharacters = errors.New("Spot name must be at least 2 characters long")
	ErrSpotNameStartsWithLetter = errors.New("Spot name must start with a letter")
	ErrSpotNameEndsWithNumber = errors.New("Spot name must end with a number")
)


type SpotStatus string
const (
	SpotStatusAvailable SpotStatus = "available"
	SpotStatusSold SpotStatus = "sold"
)

type Spot struct {
	ID string
	EventID string
	Name string
	Status SpotStatus
	TicketID string
}

func NewSpot(event *Event, name string) (*Spot, error) {
	spot := &Spot{
		ID: uuid.New().String(),
		EventID: event.ID,
		Name: name,
		Status: SpotStatusAvailable,
	}

	if err := spot.Validate(); err != nil {
		return nil, err
	}
	return spot, nil
}

func (s *Spot) Validate() error {
	if len(s.Name) == 0 {
		return ErrSpotNameRequired
	}
	if len(s.Name) < 2 {
		return ErrSpotNameTwoCharacters
	}
	// Validate if the spot name is in the correct format
	if s.Name[0] < 'A' || s.Name[0] > 'Z' {
		return ErrSpotNameStartsWithLetter
	}
	if s.Name[1] < '0' || s.Name[1] > '9' {
		return ErrSpotNameEndsWithNumber
	}
	return nil
}

func (s *Spot) Reserve(ticketID string) error {
	if s.Status == SpotStatusSold {
		return ErrSpotAlreadyReserved
	}

	s.Status = SpotStatusSold
	s.TicketID = ticketID
	return nil
}