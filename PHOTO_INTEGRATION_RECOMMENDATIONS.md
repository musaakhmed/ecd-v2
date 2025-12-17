# Photo Integration Recommendations - Économie Sociale Page

## Priority Integration Points

### 🔴 High Priority (Most Impactful)

1. **Hero Section** (Lines 30-63)
   - **Location**: Background or side image
   - **Suggested Photos**: 
     - Team members working with participants
     - Digital inclusion workshop in action
     - EPN space showing equipment and activities
   - **Layout Option**: Split layout with image on right side (50/50)

2. **Métier Section** (Lines 116-152)
   - **Location**: Above title or side-by-side with content
   - **Suggested Photos**:
     - Animateur/médiateur numérique assisting someone
     - Group training session
     - One-on-one digital support
   - **Layout Option**: Image on left (40%), text on right (60%)

3. **Parcours Section** (Lines 155-200)
   - **Location**: Add images to each of the 4 dimension cards
   - **Suggested Photos**:
     - Technical skills: Person using computer/tablet
     - Pedagogical: Group animation/workshop
     - Social skills: Team collaboration
     - Immersion: Real EPN environment
   - **Layout Option**: Small image (200x150px) at top of each card

### 🟡 Medium Priority (Good Visual Enhancement)

4. **Présentation Section** (Lines 66-113)
   - **Location**: Replace or add third column
   - **Suggested Photos**: EPN facility, training room, or team photo
   - **Layout Option**: Three-column grid (text | image | repères clés)

5. **Public Cible Section** (Lines 203-239)
   - **Location**: Above section or gallery below
   - **Suggested Photos**: Diverse participants, collaboration with partners
   - **Layout Option**: Image gallery (2-3 images) above the list

6. **Accompagnement Section** (Lines 242-276)
   - **Location**: Team photo or facility image
   - **Suggested Photos**: Team meeting, coordination session, training facilities
   - **Layout Option**: Large image above, or image in one grid card

### 🟢 Low Priority (Nice to Have)

7. **PAC Section** (Lines 279-315)
   - **Location**: Small image or icon
   - **Suggested Photos**: Planning document, competency framework visualization
   - **Layout Option**: Small decorative image or icon above title

## Implementation Suggestions

### Image Specifications
- **Hero Image**: 1920x800px (16:6.67 ratio)
- **Section Images**: 800x600px (4:3 ratio)
- **Card Images**: 400x300px (4:3 ratio)
- **Gallery Images**: 600x400px (3:2 ratio)

### Recommended Image Types
1. **People-focused**: Show real participants and team members
2. **Action shots**: Training sessions, workshops in progress
3. **Environment**: EPN spaces, equipment, facilities
4. **Diversity**: Show diverse participants (age, background, etc.)

### Technical Implementation
- Use Next.js `Image` component for optimization
- Add proper alt text for accessibility
- Consider lazy loading for below-the-fold images
- Maintain aspect ratios for consistent layout

## Layout Modifications Needed

1. **Hero**: Change from single column to 2-column grid
2. **Présentation**: Modify grid to accommodate image
3. **Métier**: Add image container alongside text
4. **Parcours Cards**: Add image slot to card component
5. **Public Cible**: Add image gallery component
6. **Accompagnement**: Add image to grid layout
