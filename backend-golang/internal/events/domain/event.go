package domain

import (
	"errors"
	"time"

	"github.com/google/uuid"
)

var (
	ErrEventNameRequired = errors.New("Event name is required")
	ErrEventDateFuture   = errors.New("Event date must be in the future")
	ErrEventCapacityZero = errors.New("Event capacity must be greater than zero (0)")
	ErrEventPriceZero    = errors.New("Event price must be greater than zero (0)")
	ErrInvalidEvent      = errors.New("invalid event data")
	ErrEventFull         = errors.New("event is full")
	ErrTicketNotFound    = errors.New("ticket not found")
	ErrTicketNotEnough   = errors.New("not enough tickets available")
	ErrEventNotFound     = errors.New("event not found")
)

type Rating string

const (
	RatingFree Rating = "L"
	Rating10   Rating = "L10"
	Rating12   Rating = "L12"
	Rating14   Rating = "L14"
	Rating16   Rating = "L16"
	Rating18   Rating = "L18"
)

type Event struct {
	ID           string
	Name         string
	Location     string
	Organization string
	Rating       Rating
	Date         time.Time
	ImageURL     string
	Capacity     int
	Price        float64
	PartnerID    int
	Spots        []Spot
	Tickets      []Ticket
}

func (e Event) Validate() error {
	if e.Name == "" {
		return ErrEventNameRequired
	}

	if e.Date.Before(time.Now()) {
		return ErrEventDateFuture
	}

	if e.Capacity <= 0 {
		return ErrEventCapacityZero
	}

	if e.Price <= 0 {
		return ErrEventPriceZero
	}

	return nil
}

// NewEvent creates a new event with the given parameters.
func NewEvent(name, location, organization string, rating Rating, date time.Time, capacity int, price float64, imageUrl string, partnerID int) (*Event, error) {
	event := &Event{
		ID:           uuid.New().String(),
		Name:         name,
		Location:     location,
		Organization: organization,
		Rating:       rating,
		Date:         date,
		Capacity:     capacity,
		Price:        price,
		ImageURL:     imageUrl,
		PartnerID:    partnerID,
		Spots:        make([]Spot, 0),
	}
	if err := event.Validate(); err != nil {
		return nil, err
	}
	return event, nil
}

func (e *Event) AddSpot(name string) (*Spot, error) {
	spot, err := NewSpot(e, name)

	if err != nil {
		return nil, err
	}

	e.Spots = append(e.Spots, *spot)
	return spot, nil
}
