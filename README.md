# Final-Project
1) In your README.md file, write a brief description (no longer than a sentence or two) describing your idea. (a three part pendulum, a rabbit/fox chasing game, a hexagonal cellular automata). 
Im going to make a game using Automomous Agents where the mouse is a planet and you have to move it to escape different aliens.

2)Describe the things that you are modeling: ("I'll have a class for a multi-part pendulum which will manage Pendulum objects," "I'll have a Rabbit class and a Fox class," "I'll have a Cell class")


Main elements/classes:
Planet: The player-controlled object, follows the mouse.
Alien: Autonomous agents that chase the planet.


3)Decribe what you will do in setup.
Create Planet and Aliens
Add Aliens to array
Display Planet and Aliens on canvas


4)Describe the other variables and data structures you'll need. 
An array containing all the aliens
Variable to keep track of time

5)Describe how the flow of draw will work.

Check the current time to see whether the game should keep going
Check to see if game over
Update positions of Aliens and Planet



Class descriptions:
Planet class
Properties:
Position (vector)
Radius (for visual size)

Actions:
Update func, determing mouse position
Update func, planets location follows mouse (x,y) position
Check if alien is touching


Alien class
Properties:
Position (vector)
Velocity (vector)
Acceleration (vector)
Max speed / force
Heading



Actions:
Update func, determine planets position
Seek the planet
Update position using velocity and acceleration
Display itself visually






Describe each of the classes you need in terms of properties and actions.

