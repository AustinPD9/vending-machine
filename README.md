# VendingMachine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Instructions
Make a simple UI that shows several buttons to order items, the prices attached to them, your
current balance, and buttons to add money to your balance and to get all of your change back.
The following functionality should be supported in one way or another.

- Insert Money adds to current balance, have a popup that prompts for a numeric value
you are putting in (eg: “1.50”)

- Select Item. When selected shows a choice for three different items and their prices
    - Then takes the click input for the item button you press and “dispenses” the item.
        - Keep track of current balance and reduce it appropriately when you “buy” an item

- Get change which returns whatever money was on the current balance as change (Just have a prompt displaying the amount sent back)

- Transaction List (can be a popup / new view, or on the same screen) showing each item sold, the cost, and a total revenue amount at the bottom of the table

Keep track of all the balances, change, ect.. And handle any errors that might be thrown (Not enough money for item, item out of inventory, ect.. With a simple popup errors describing the issue.

“Saving” this data can simply be done by holding it in memory of your running program, no need to actually commit it to any database. Items can be hard coded in your code.

## Directory to the solution/my code
-src
  -app
    -vend-functions
