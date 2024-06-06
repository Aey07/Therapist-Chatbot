const responses = {
    greeting: "Hello! I'm here to help. How are you feeling today?",
    stressed: "I'm sorry to hear that. Can you tell me a bit more about what's been causing your stress?",
    overwhelmed: "Feeling overwhelmed can be tough. What do you think is the main source of your overwhelm?",
    work: "Work can definitely be a source of stress. Have you been able to take any time for yourself lately?",
    no: "It's important to take care of yourself. What are some activities you enjoy that might help you unwind? You might try activities like going to the gym, taking a walk, or listening to music.",
    music: "Music can be very soothing. What kind of music do you like to listen to?",
    classical: "That's great! Classical music can be very calming. Have you tried using music as a background while you relax or meditate?",
    jazz: "Jazz is wonderful! It can be very uplifting. Have you thought about creating a relaxing playlist?",
    rb: "R&B is great! It can be very soothing and uplifting. What are some of your favorite R&B artists?",
    meditate: "Meditation is a powerful tool for managing stress. Would you like some tips on how to start meditating?",
    yes: "Starting with just five minutes a day can make a big difference. Find a quiet spot, sit comfortably, and focus on your breath. It's okay if your mind wanders; gently bring it back to your breathing.",
    thanks: "You're welcome! Remember, I'm here whenever you need to talk.",
    gym: "Exercise like going to the gym can be a great way to relieve stress. What kind of workouts do you enjoy?",
    walking: "Walking is a wonderful way to clear your mind and reduce stress. Do you have a favorite place to walk?"
};

const getResponse = (userInput) => {
    const input = userInput.toLowerCase().trim();
    if (input.includes("hello") || input.includes("hi") || input.includes("sup") || input.includes("hey")) {
        return responses.greeting;
    } else if (input.includes("stressed") || input.includes("stress")) {
        return responses.stressed;
    } else if (input.includes("overwhelmed")) {
        return responses.overwhelmed;
    } else if (input.includes("work") || input.includes("job") || input.includes("study") || input.includes("career")) {
        return responses.work;
    } else if (input.includes("no")) {
        return responses.no;
    } else if (input.includes("music")) {
        return responses.music;
    } else if (input.includes("classical")) {
        return responses.classical;
    } else if (input.includes("jazz")) {
        return responses.jazz;
    } else if (input.includes("r&b") || input.includes("rb")) {
        return responses.rb;
    } else if (input.includes("meditate") || input.includes("meditation")) {
        return responses.meditate;
    } else if (input.includes("yes")) {
        return responses.yes;
    } else if (input.includes("thank") || input.includes("thanks")) {
        return responses.thanks;
    } else if (input.includes("gym") || input.includes("exercise")) {
        return responses.gym;
    } else if (input.includes("walk") || input.includes("walking")) {
        return responses.walking;
    } else {
        return "I'm not sure how to help with that. Can you tell me more?";
    }
};

export default getResponse;
