# Final-Project
Im going to make a game using Automomous Agents where the mouse is a planet and you have to move it to escape different aliens.

Main elements/classes:
Planet: The player-controlled object, follows the mouse.
Alien: Autonomous agents that chase the planet.

Class descriptions:
Planet class
Properties:
Position (vector)
Radius (for visual size)

Actions:
Follows mouse position

Alien class
Properties:
Position (vector)
Velocity (vector)
Acceleration (vector)
Max speed / force

Actions:
Seek the planet
Update position using velocity and acceleration
Display itself visually


