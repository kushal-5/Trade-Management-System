// export const LABELS = {
//   general:[ "General"],
//   address: "Address",
//   bank: "Bank",
//   depository: "Depository",
//   documents: "Documents",
//   userAgreement: "User Agreement",
//   corporateDetails: "Corporate Details",
//   ownershipDetails: "Ownership Details",
//   individualDetails: "Individual Details",
//   moneyLaunderingDetails: "Money Laundering Details"
// };

// export const getSections = (clientType) => {
//   let dynamicSteps = [];

//   // Base sections that appear for all client types
//   const baseSections = [
//     { id: 1, label: LABELS.general, steps: [1, 2] }
//   ];

//   // Add type-specific sections
//   if (baseSections.steps[2].clientType === "corporate" || baseSections.steps[2].clientType === "mutual") {
//     dynamicSteps = [
//       { 
//         id: 2, 
//         label: LABELS.corporateDetails, 
//         steps: [3, 4, 5] // 3 steps for corporate details
//       },
//       { 
//         id: 3, 
//         label: LABELS.ownershipDetails, 
//         steps: [6, 7, 8, 9] // 4 steps for ownership details
//       }
//     ];
//   } else if (baseSections.steps[2].clientType === "individual") {
//     dynamicSteps = [
//       { 
//         id: 2, 
//         label: LABELS.individualDetails, 
//         steps: [3, 4, 5, 6] // 4 steps for individual details
//       },
//       { 
//         id: 3, 
//         label: LABELS.moneyLaunderingDetails, 
//         steps: [7, 8, 9, 10] // 4 steps for money laundering details
//       }
//     ];
//   }

//   // Common sections that appear after type-specific sections
//   const commonSections = [
//     { id: dynamicSteps.length + 2, label: LABELS.address, steps: [11] },
//     { id: dynamicSteps.length + 3, label: LABELS.bank, steps: [12] },
//     { id: dynamicSteps.length + 4, label: LABELS.depository, steps: [13] },
//     { id: dynamicSteps.length + 5, label: LABELS.documents, steps: [14] },
//     { id: dynamicSteps.length + 6, label: LABELS.userAgreement, steps: [15] }
//   ];

//   // Combine all sections in the correct order
//   return [
//     ...baseSections,
//     ...dynamicSteps,
//     ...commonSections
//   ];
// };

// // Helper function to get total steps for a client type
// export const getTotalSteps = (clientType) => {
//   const sections = getSections(clientType);
//   return Math.max(...sections.flatMap(section => section.steps));
// };

// // Helper function to get current section based on step number
// export const getCurrentSection = (clientType, currentStep) => {
//   const sections = getSections(clientType);
//   return sections.find(section => section.steps.includes(currentStep));
// };

// // Helper function to get next available step
// export const getNextStep = (clientType, currentStep) => {
//   const sections = getSections(clientType);
//   const allSteps = sections.flatMap(section => section.steps).sort((a, b) => a - b);
//   const currentIndex = allSteps.indexOf(currentStep);
//   return currentIndex < allSteps.length - 1 ? allSteps[currentIndex + 1] : null;
// };

// // Helper function to get previous available step
// export const getPreviousStep = (clientType, currentStep) => {
//   const sections = getSections(clientType);
//   const allSteps = sections.flatMap(section => section.steps).sort((a, b) => a - b);
//   const currentIndex = allSteps.indexOf(currentStep);
//   return currentIndex > 0 ? allSteps[currentIndex - 1] : null;
// };


// Constants for client types to avoid typos and enable better IDE support
export const CLIENT_TYPES = {
  CORPORATE: 'corporate',
  MUTUAL: 'mutual',
  INDIVIDUAL: 'individual'
};

export const LABELS = {
  general: ["General"],
  address: "Address",
  bank: "Bank",
  depository: "Depository",
  documents: "Documents",
  userAgreement: "User Agreement",
  corporateDetails: "Corporate Details",
  ownershipDetails: "Ownership Details",
  individualDetails: "Individual Details",
  moneyLaunderingDetails: "Money Laundering Details"
};

export const getSections = (clientType) => {
  // Base sections that appear for all client types
  const baseSections = [
    { 
      id: 1, 
      label: LABELS.general, 
      steps: [1, 2] 
    }
  ];

  let dynamicSteps = [];
  
  // Add type-specific sections based on client type
  if (clientType === CLIENT_TYPES.CORPORATE || clientType === CLIENT_TYPES.MUTUAL) {
    dynamicSteps = [
      {
        id: 2,
        label: LABELS.corporateDetails,
        steps: [3, 4, 5]
      },
      {
        id: 3,
        label: LABELS.ownershipDetails,
        steps: [6, 7, 8, 9]
      }
    ];
  } else if (clientType === CLIENT_TYPES.INDIVIDUAL) {
    dynamicSteps = [
      {
        id: 2,
        label: LABELS.individualDetails,
        steps: [3, 4, 5, 6]
      },
      {
        id: 3,
        label: LABELS.moneyLaunderingDetails,
        steps: [7, 8, 9, 10]
      }
    ];
  }

  // Common sections that appear after type-specific sections
  const commonSections = [
    { id: dynamicSteps.length + 2, label: LABELS.address, steps: [11] },
    { id: dynamicSteps.length + 3, label: LABELS.bank, steps: [12] },
    { id: dynamicSteps.length + 4, label: LABELS.depository, steps: [13] },
    { id: dynamicSteps.length + 5, label: LABELS.documents, steps: [14] },
    { id: dynamicSteps.length + 6, label: LABELS.userAgreement, steps: [15] }
  ];

  return [...baseSections, ...dynamicSteps, ...commonSections];
};

/**
 * Gets the total number of steps for a given client type
 * @param {string} clientType - The type of client
 * @returns {number} The total number of steps
 */
export const getTotalSteps = (clientType) => {
  const sections = getSections(clientType);
  return Math.max(...sections.flatMap(section => section.steps));
};

/**
 * Gets the current section based on the step number
 * @param {string} clientType - The type of client
 * @param {number} currentStep - The current step number
 * @returns {Object|null} The current section or null if not found
 */
export const getCurrentSection = (clientType, currentStep) => {
  if (!clientType || typeof currentStep !== 'number') {
    return null;
  }
  const sections = getSections(clientType);
  return sections.find(section => section.steps.includes(currentStep)) || null;
};

/**
 * Gets the next available step number
 * @param {string} clientType - The type of client
 * @param {number} currentStep - The current step number
 * @returns {number|null} The next step number or null if at the end
 */
export const getNextStep = (clientType, currentStep) => {
  if (!clientType || typeof currentStep !== 'number') {
    return null;
  }
  const sections = getSections(clientType);
  const allSteps = sections.flatMap(section => section.steps).sort((a, b) => a - b);
  const currentIndex = allSteps.indexOf(currentStep);
  return currentIndex < allSteps.length - 1 ? allSteps[currentIndex + 1] : null;
};

/**
 * Gets the previous available step number
 * @param {string} clientType - The type of client
 * @param {number} currentStep - The current step number
 * @returns {number|null} The previous step number or null if at the beginning
 */
export const getPreviousStep = (clientType, currentStep) => {
  if (!clientType || typeof currentStep !== 'number') {
    return null;
  }
  const sections = getSections(clientType);
  const allSteps = sections.flatMap(section => section.steps).sort((a, b) => a - b);
  const currentIndex = allSteps.indexOf(currentStep);
  return currentIndex > 0 ? allSteps[currentIndex - 1] : null;
};