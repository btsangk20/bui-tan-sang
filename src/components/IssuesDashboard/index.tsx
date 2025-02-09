import IssuesList from '../IssuesList';
import { Issue } from '../../types/codeSnippet';

const IssuesDashboard: React.FC = () => {
  const issues: Issue[] = [
    {
      category: 'Type Safety Issues',
      details: [
        "The 'blockchain' parameter in getPriority is typed as 'any'.",
        "The 'blockchain' property is missing in the WalletBalance interface.",
        'Inconsistent use of TypeScript.',
      ],
    },
    {
      category: 'Performance Issues',
      details: [
        'Unnecessary double mapping: sortedBalances and then formattedBalances.',
        "Missing 'prices' dependency in the useMemo dependency array.",
        'formattedBalances calculation is not memoized.',
        'Complex sorting logic can be simplified.',
      ],
    },
    {
      category: 'Logic Issues',
      details: [
        'Incorrect filter condition (lhsPriority is not defined, and balance.amount <= 0 should likely be > 0).',
        'Complex and hard-to-maintain sorting logic.',
        'Usage of magic numbers for priority values.',
      ],
    },
    {
      category: 'React Best Practices Issues',
      details: [
        'Using array index as key in mapped elements.',
        'Props destructuring can be simplified.',
        "Prop 'children' is not used.",
        'Missing PropTypes for the WalletRow component.',
      ],
    },
    {
      category: 'Code Structure Issues',
      details: [
        'Blockchain priority is hard-coded.',
        'Nested condition logic in filter/sort is complex.',
        'Redundant variable declarations.',
      ],
    },
  ];

  const improvements: Issue[] = [
    {
      category: 'Type Safety Improvements',
      details: [
        "Added correct typing for 'blockchain'.",
        'Created an enum for priority values.',
        'Extended interfaces properly.',
      ],
    },
    {
      category: 'Performance Improvements',
      details: [
        'Merged mapping operations.',
        'Added missing dependencies for useMemo.',
        'Simplified sorting logic.',
        'Memoized formatted balances.',
      ],
    },
    {
      category: 'Logic Improvements',
      details: [
        'Fixed filter condition.',
        'Simplified priority comparison.',
        'Used enum instead of magic numbers.',
        'Corrected balance amount comparison.',
      ],
    },
    {
      category: 'React Best Practices Improvements',
      details: [
        'Used a unique key combining currency and blockchain.',
        'Simplified props destructuring.',
        'Removed unused props.',
        'Improved component structure.',
      ],
    },
    {
      category: 'Code Structure Improvements',
      details: [
        'Used an enum for priority values.',
        'Simplified condition logic.',
        'Reduced redundant code.',
        'Better separation of concerns.',
      ],
    },
    {
      category: 'Additional Enhancements',
      details: [
        'Added an ErrorBoundary to prevent unexpected crashes.',
        'Implemented a loading state when data is not ready.',
        'Handled errors if balances or prices are invalid.',
        'Added validation for prices when calculating USD value.',
        'Included PropTypes for WalletRow to enforce correct data types.',
      ],
    },
  ];

  return (
    <div>
      <IssuesList title='Identified Issues' data={issues} />
      <IssuesList title='Implemented Improvements' data={improvements} />
    </div>
  );
};

export default IssuesDashboard;
