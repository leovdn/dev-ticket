package domain

import "time"

type Rating string
const (
	RatingFree Rating = "L"
	Rating10 Rating = "L10"
	Rating12 Rating = "L12"
	Rating14 Rating = "L14"
	Rating16 Rating = "L16"
	Rating18 Rating = "L18"
)

type Event struct {
	ID string
	Name string
	Location string
	Organization string
	Rating Rating
	Date time.Time
	ImageURL string
	Capacity int
	Price float64
	PartnerID int
	Spots []Spot
	Tickets []Ticket
}
