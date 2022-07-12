# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
Assumptions
Ticketing tool is Jira
It could be Scrum or Kanban
Version Control tool is Github

1. Ticket or issue Accessment
This involve the following step
- considering the Business impact 
- Priority (High, Medium and low)
- Scope and requirements
- Team discussions
- User/Developer story (Acceptance Criteria)

2. Log time on the ticket
-  I would populate the tracking field and description

3. Estimate the ticket
This involve setting an estimate for the ticket:
 - I would select the ticket and choose the Story point
 - Enter the number of story points or amount of time I believe it'll take to complete work on the issue.

4. Ticket Customization
- pin a field
- Add necessary labels as set by Jira Administrator (epic link, epic name, Components etc)

5. Implementation
- Pulling from the Main
- Creating a Branch
- Creating a Unit Test
- PR (Push Request)
- Adding Reviewers
- code Reviews