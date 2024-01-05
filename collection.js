//Hi! If you are reading this, 
//you found the code! CONGRATS!

//Unlock everything:
c=Vars.content;
c.items().each(e=>e.unlock);
c.blocks().each(e=>e.unlock);
c.units().each(e=>e.unlock);
c.statusEffects().each(e=>e.unlock);
c.fluids().each(e=>e.unlock);
/*NOTE: You can use this code to unlock specific things:
Blocks.router.unlock();
*/
