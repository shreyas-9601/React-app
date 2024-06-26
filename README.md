# React-app
Component Structure:

1. Counter Component:

Responsible for displaying a counter and providing buttons to increment, decrement, and reset the counter.
Implemented in the Counter.tsx file.

2. User Data Form Component:

Designed for entering user data including name, address, email, and phone.
Auto-generates user ID and saves data to local storage or Redux Toolkit (RTK) on form submission.
Displays unsaved changes pop-up if there are unsaved changes in the form when the user tries to close the browser.
Implemented in the UserForm.tsx file.

3. User Details Component:

Visualizes user data in a rich text editor.
Integrated with formatting options like bold, italic, underline, and lists.
Utilizes data persistence to maintain user data across sessions.
Implemented in the UserDetails.tsx file.

4. Dashboard Component:

Displays counter and user profile visuals.
Utilizes React charts to display user profile trends.
Implemented in the Dashboard.tsx file.


State Management Choices:

Redux Toolkit (RTK): Used for managing application-level state, particularly for user data. RTK provides a powerful set of tools for efficient and scalable state management in React applications. It simplifies common Redux tasks such as store setup, reducer creation, and action dispatching.

Local State: Local component state is used for managing UI-specific state within individual components. For example, the counter component may utilize local state to manage the counter value.

React Context: React Context may be utilized for sharing global state between components that are deeply nested in the component tree, or when it's not feasible to pass props down manually. However, in this scenario, Redux provides a more robust solution for state management at the application level.

Overall, the component structure and state management choices are designed to provide a clear separation of concerns and ensure maintainability and scalability of the application. The combination of Redux Toolkit, local state, and React Context allows for effective management of both global and local state within the application.