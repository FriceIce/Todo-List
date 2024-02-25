# Todo-List
Todo-list, Chasacademy. 

# Resonemang kring min kod.

<b>Styrkor:</b>
Jag har påbörjat utvecklingen av en Todo-list applikation med hjälp av TypeScript och strukturerat koden med moduler som exporteras och importeras enligt ES6-standarden. En tydlig styrka i koden är den statiska typningen som TypeScript erbjuder. Det leder till en kod som är lättare att läsa och ger kontinuerligt stöd med metoder från objektens prototypkedja, eftersom programmet alltid vet vilket värde en specifik programkod ska innehålla vid exekvering. Dessutom möjliggör TypeScript felhantering innan exekvering, vilket har varit av stor nytta för mig.

Användningen av moduler i projektet har resulterat i en mer strukturerad mapp- och filstruktur. Det blir enklare att felsöka och navigera bland applikationens filer eftersom modulerna har namngivits efter den specifika uppgift de utför för att förtydliga ansvarsområden i projektet. Detta har också bidragit till återanvädning av kod och minskad kodmängd i main.ts (huvudfilen), vilken nu endast innehåller eventhanterare och import av moduler.

Ännu en styrka är att applikation stoppar användaren att mata in HTML-taggar i inmatningsfältet med hjälp av regEx. Det förhindrar alltså användraren att manipulera texten eller utföra DOM Based XSS attacker när en task skapas. 

<b>Brister:</b>
Även om jag i texten ovan nämnde moduler som en av kodens styrkor, så finns det en nackdel med min erfarenhet av dem. En nackdel är min osäkerhet kring hur man strukturerar modulerna på det mest effektiva sättet. Frågor som om applikationens mapp-/filstruktur följer bästa praxis eller om det finns för få eller för många moduler, är frågor som jag inte direkt har svar på. Denna osäkerhet känner jag är en brist i applikationens programkod och är något jag behöver kolla in på lite närmare. 